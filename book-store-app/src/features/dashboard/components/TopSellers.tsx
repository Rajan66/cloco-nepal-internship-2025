import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

const TopSellers = () => {
    return (
        <Card className="min-w-[360px]">
            <CardHeader>
                <CardTitle>Top Sellers</CardTitle>
                <CardDescription>152 books sold this month.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    <div className="flex items-center">
                        <p className="text-sm font-medium leading-none">
                            World still speak
                        </p>
                        <div className="ml-auto font-medium">$49.00</div>
                    </div>
                    <div className="flex items-center">
                        <p className="text-sm font-medium leading-none">
                            Two possible early
                        </p>
                        <div className="ml-auto font-medium">$39.00</div>
                    </div>
                    <div className="flex items-center">
                        <p className="text-sm font-medium leading-none">
                            Cut choice term
                        </p>
                        <div className="ml-auto font-medium">$23.00</div>
                    </div>
                    <div className="flex items-center">
                        <p className="text-sm font-medium leading-none">
                            Redemption Burger
                        </p>
                        <div className="ml-auto font-medium">$29.00</div>
                    </div>
                    <div className="flex items-center">
                        <p className="text-sm font-medium leading-none">
                            Something in the way
                        </p>
                        <div className="ml-auto font-medium">$39.00</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TopSellers;
