import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { links } from "@/utils/links";
import Link from "next/link";
import ProfileBtn from "./ProfileBtn";
import LogoutButton from "./LogoutButton";

function DropDownMenuList() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ProfileBtn />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {links.map((link, idx) => (
            <DropdownMenuItem key={idx}>
              <Link href={link.href}>{link.label}</Link>
            </DropdownMenuItem>
          ))}
          <LogoutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
export default DropDownMenuList;
