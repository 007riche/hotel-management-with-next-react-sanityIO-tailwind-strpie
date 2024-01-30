
import ClientComponent from './client_component';
import { heading1, heroImageSection } from './server_component';

const HeroSection = () => {
    return (
   <ClientComponent heroImageSection={heroImageSection} heading1={heading1}/>
    )
  };
  
  
  export default HeroSection;