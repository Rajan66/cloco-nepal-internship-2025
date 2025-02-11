import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const TopSellersSkeleton = () => {
    return (
        <Card>
            <CardHeader>
                <Skeleton className="h-6 w-[140px]" /> {/* CardTitle */}
                <Skeleton className="h-4 w-[180px]" /> {/* CardDescription */}
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center">
                            <div className="ml-4 space-y-1">
                                <Skeleton className="h-4 w-[120px]" /> {/* Title */}
                            </div>
                            <Skeleton className="ml-auto h-4 w-[80px]" /> {/* Amount */}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default TopSellersSkeleton;
