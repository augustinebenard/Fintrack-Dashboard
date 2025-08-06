import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket } from "lucide-react";

export function ComingSoon() {
    return (
        <main className="flex flex-1 flex-col items-center justify-center gap-4 p-4 md:gap-8 md:p-8">
            <Card className="w-full max-w-md text-center">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                        <Rocket className="w-12 h-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Coming Soon!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        We're working hard to bring this feature to you. Stay tuned!
                    </p>
                </CardContent>
            </Card>
        </main>
    );
}
