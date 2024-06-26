import * as styles from './ContactContent.styles';
import { ReactComponent as Github } from '@assets/icons/contact/Github.svg';
import { ReactComponent as Gmail } from '@assets/icons/contact/Gmail.svg';
import { ReactComponent as Copy } from '@assets/icons/contact/CopyIcon.svg';

const ContactContent = () => {
  const githubUrl = 'https://github.com/gyeongju1230';
  const email = 'jkj01230@gmail.com';
  const mailUrl = `mailto:${email}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch(err => {});
  };

  return (
    <styles.ContactContainer>
      <styles.Container>
        <styles.IconBox
          onClick={() => {
            window.open(githubUrl);
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
        >
          <Github className="icon" />
        </styles.IconBox>
        <styles.Title>USER NAME</styles.Title>
        <styles.Content
          onClick={() => copyToClipboard('gyeongju1230')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Copy className="copy-icon" /> gyeongju1230
        </styles.Content>
      </styles.Container>

      <styles.Container>
        <styles.IconBox
          onClick={() => {
            window.open(mailUrl);
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
        >
          <Gmail className="icon" />
        </styles.IconBox>
        <styles.Title>GMAIL</styles.Title>
        <styles.Content
          onClick={() => copyToClipboard('jkj01230@gmail.com')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Copy className="copy-icon" /> jkj01230@gmail.com
        </styles.Content>
      </styles.Container>
    </styles.ContactContainer>
  );
};

export default ContactContent;
