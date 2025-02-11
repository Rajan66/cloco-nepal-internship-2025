import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type CardProps = {
    title: string;
    Icon: React.ElementType;
    count: number;
};

const CategoryCard = ({ title, Icon, count }: CardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    {title}
                    <Icon />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-xl opacity-100 text-primary">
                    {count}
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;
