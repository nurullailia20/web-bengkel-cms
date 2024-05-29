import react from 'react';
import Cookies from "js-cookie";
import { useRouter } from 'next/router';

function ServiceHistoryPage() {
  const router = useRouter()
  react.useEffect(() => {
    if (!Cookies.get("token")) router.push("/login");
  }, []);
  return (
    <div>
      Riwayat Perbaikan
    </div>
  )
}

export default ServiceHistoryPage
