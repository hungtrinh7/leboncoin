"use client";
import { useState } from "react";
import supabase from "../config/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const cookies = useCookies();

  const handleSignIn = async () => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (response.data.session.user.aud === "authenticated") {
      cookies.set("isUserLoggedIn", "true", {
        secure: true,
        expires: response.data.session.expires_in,
      });
      router.push("/");
    } else {
      console.log(response, "Connexion failed");
    }
  };

  // const handleSignUp = async () => {
  //   await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${location.origin}/auth/callback`,
  //     },
  //   });
  //   router.refresh();
  // };

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut();
  //   router.refresh();
  // };

  return (
    <>
      <div className="max-w-lg mx-auto mt-6 mb-4 p-8 border rounded-2xl shadow-sm">
        <h2 className="text-[24px] font-bold">Bonjour !</h2>
        <p className="mb-8 mt-2">
          Connectez-vous pour découvrir toutes nos fonctionnalités.
        </p>
        <div>
          <div>
            <label className="text-base">E-mail *</label>
            <br />
            <input
              name="email"
              className="w-full border rounded-2xl p-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label className="text-base">Mot de passe *</label>
            <br />
            <input
              type="password"
              name="password"
              className="w-full border rounded-2xl p-2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleSignIn}
          className="flex items-center w-full justify-center text-white text-base font-bold px-4 mt-4 h-11 bg-[#EC5A12] rounded-2xl hover:opacity-90 text-center"
        >
          Se connecter
        </button>

        <p>
          Envie de nous rejoindre ?{" "}
          <Link href={""} className="font-bold">
            Créer un compte
          </Link>
        </p>
      </div>
    </>
  );
}
