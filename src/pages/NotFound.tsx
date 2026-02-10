import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ErrorMessage from "@/components/ErrorMessage";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <ErrorMessage
      title="Page not found"
      description="The page you're looking for doesn't exist or may have been moved. Let's get you back to your journal."
      actionLabel="Return to Home"
      onAction={() => navigate("/")}
    />
  );
};

export default NotFound;
