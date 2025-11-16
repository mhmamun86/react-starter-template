import { use, useEffect, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

export default function Profile() {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState('');
  useEffect(() => {
    setDisplayName(user?.displayName);
  }, [user]);
  console.log(displayName);
  if (!user) return null;

  async function handleSave(e) {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, { displayName });
      toast.success('Profile updated');
    } catch (err) {
      console.error(err);

      toast.error('Failed to update profile');
    }
  }

  return (
    <div className="p-8 max-w-md mx-auto" data-aos="fade-in">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>

      <form
        onSubmit={handleSave}
        className="space-y-4 bg-base-100 p-6 rounded-lg shadow"
      >
        <div>
          <label className="block text-sm">Email</label>
          <p className="text-sm">{user.email}</p>
        </div>

        <div>
          <label className="block text-sm">Display name</label>
          <input
            defaultValue={displayName}
            onChange={e => setDisplayName(e.target.value)}
            className="input w-full"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
