import { GoogleOAuthProvider } from '@react-oauth/google';
import SignupForm from '@/components/main_sections/SignupForm'; // adjust the path
import { Suspense } from 'react';
import Loader from '@/ui/Loader';
const userId=process.env.NEXT_GOOGLE_ID
const App = () => (
  <Suspense fallback={<Loader/>}>
    <GoogleOAuthProvider clientId={userId}>
      <SignupForm />
    </GoogleOAuthProvider>
  </Suspense>
);

export default App;
