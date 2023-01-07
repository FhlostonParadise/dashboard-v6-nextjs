import { FaHome, FaHeadphones, FaEnvelope, FaComment, FaIdBadge } from 'react-icons/fa';


const data = [
  {
    title: 'Home',
    icon: <FaHome />,
    link: '/',
  },
  {
    title: 'Resume',
    icon: <FaIdBadge />,
    link: '/admin/resume',
  },
  {
    title: 'Blog',
    icon: <FaComment />,
    link: '/admin/blog',
  },
  {
    title: 'Contact',
    icon: <FaEnvelope />,
    link: '/admin/contact',
  },
  {
    title: 'Music',
    icon: <FaHeadphones />,
    link: '/admin/settings',
  },
  
];

export default data;
