import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar } from "../ui/avatar"

type TUser = {
    name: string | null | undefined;
    email: string;
}

type DropdownProfileProps = {
    user: TUser
};

const DropdownProfile = ({ user }: DropdownProfileProps) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className='bg-black text-white dark:bg-white dark:text-black text-center flex items-center justify-center'>
                    <h2 className='font-semibold'>{(user.name ?? "").charAt(0) || "?"}</h2>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel >{user.name ?? "James"}</DropdownMenuLabel>
                <DropdownMenuLabel className="text-sm font-normal">{user.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default DropdownProfile