import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

export default function Forgot(){
  const [email, setEmail] = useState("");

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent");
    } catch(err){
      console.error(err);
      toast.error(err.message || "Failed to send reset email");
    }
  }

  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="input w-full" />
        <button className="btn btn-primary w-full" type="submit">Send reset email</button>
      </form>
    </div>
  );
}
