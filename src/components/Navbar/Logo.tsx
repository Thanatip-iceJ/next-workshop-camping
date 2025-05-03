import Link from "next/link";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button className="py-4">
      <Link href="/" className="text-lg font-semibold">
        CAMP
      </Link>
    </Button>
  );
}
export default Logo;
