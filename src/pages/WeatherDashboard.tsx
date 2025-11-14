import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

const WeatherDashboard = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"ghost"}
          size={"icon"}
          // disabled={}
          // onClick={}
        >
          <RefreshCcw />
        </Button>
      </div>
    </div>
  );
};

export default WeatherDashboard;
