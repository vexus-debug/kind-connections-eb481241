import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async () => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  // Create admin user
  const { data, error } = await supabase.auth.admin.createUser({
    email: "rubiismiledentalclinic@gmail.com",
    password: "Thepassword@4849410",
    email_confirm: true,
  });

  if (error && !error.message.includes("already been registered")) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // If user already exists, find their ID
  let userId = data?.user?.id;
  if (!userId) {
    const { data: users } = await supabase.auth.admin.listUsers();
    const existing = users?.users?.find(
      (u: any) => u.email === "rubiismiledentalclinic@gmail.com"
    );
    userId = existing?.id;
  }

  if (userId) {
    await supabase
      .from("user_roles")
      .upsert({ user_id: userId, role: "admin" }, { onConflict: "user_id,role" });
  }

  return new Response(
    JSON.stringify({ success: true, userId }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
});
