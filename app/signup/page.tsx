import { GoogleOAuthProvider } from '@react-oauth/google';
import SignupForm from '@/components/main_sections/SignupForm'; // adjust the path
import { Suspense } from 'react';
import Loader from '@/ui/Loader';
const userId:string=process.env.NEXT_GOOGLE_ID
const backend_api:string=process.env.NEXT_BACKEND_URL


const SignupPage = () => {
  return <Suspense fallback={<Loader/>}>
    <GoogleOAuthProvider clientId={userId}>
      <SignupForm backend_api={backend_api} />
    </GoogleOAuthProvider>
  </Suspense>
};

export default SignupPage;
