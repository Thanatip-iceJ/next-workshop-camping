import { SignOutButton } from "@clerk/nextjs";

export default function LogoutButton() {
  return (
    <SignOutButton>
    <button>Logout</button>
    </SignOutButton>
  )
}