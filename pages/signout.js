import WithProtected from "../HOC/WithProtected";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import WithLayout from "../HOC/WithLayout";

function signout({ logout }) {
  const router = useRouter();
  
  useEffect(() => {
    (async function() {
      await logout().then((msg) => {
        console.log(msg);
        router.push('/login');
      })
      .catch(({message}) => {
        console.log(message);
      });
    })();
  })
    
  return null;
}

export default WithLayout(WithProtected(signout), {title: 'Signout'});