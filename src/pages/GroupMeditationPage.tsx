import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GroupMeditationIntroSection from '../sections/groupMeditation/GroupMeditationIntroSection';
import GroupMeditationBenefitsSection from '../sections/groupMeditation/GroupMeditationBenefitsSection';
import GroupMeditationStorySection from '../sections/groupMeditation/GroupMeditationStorySection';
import GroupMeditationFaqSection from '../sections/groupMeditation/GroupMeditationFaqSection';
import GroupMeditationInterestSection from '../sections/groupMeditation/GroupMeditationInterestSection';
import GroupMeditationInquirySection from '../sections/groupMeditation/GroupMeditationInquirySection';

export default function GroupMeditationPage() {
  return (
    <>
      <Navbar />
      <main>
        <GroupMeditationIntroSection />
        <GroupMeditationBenefitsSection />
        <GroupMeditationStorySection />
        <GroupMeditationFaqSection />
        <GroupMeditationInterestSection />
        <GroupMeditationInquirySection />
      </main>
      <Footer />
    </>
  );
}

