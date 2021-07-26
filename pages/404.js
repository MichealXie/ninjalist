import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
      
    }, 3000);
    
  }, [])
  return (
    <div>
      <Link href="/">Back Home</Link>
    </div>
  );
}
 
export default NotFound;