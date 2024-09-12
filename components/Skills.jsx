import React from 'react';
import './Skills.css';

const skills = [
  { name: 'PostgreSQL', logo: 'https://e7.pngegg.com/pngimages/331/419/png-clipart-postgresql-database-installation-microsoft-sql-server-programming-language-mysql-logo-blue-logo.png' },
  { name: 'Python', logo: 'https://i1.wp.com/qavalidation.com/wp-content/uploads/2018/02/python-logo.png' },
  { name: 'RPA', logo: 'https://th.bing.com/th/id/R.5c2bb7e689c3d98101ed4d7d81b2b461?rik=aMF50syUE6bRwg&riu=http%3a%2f%2fitacademy.com.my%2fwp-content%2fuploads%2f2019%2f08%2fRPA.png&ehk=bNatmywa7gIph4H98zJldw8anC%2bYFMsT%2fqFTJKW5foI%3d&risl=&pid=ImgRaw&r=0' },
  { name: 'Flutterflow', logo: 'https://staging-static.us-sea-1.linodeobjects.com/products/logos/9ba06bb8-5560-4f66-ac2b-c54114900acd.png' },
  { name: 'AWS', logo: 'https://snapshooter.io/assets/img/marketing/providers/AWS.png' },
  { name: 'GraphQL', logo: 'https://dwglogo.com/wp-content/uploads/2018/01/GraphQL_logo-768x529.png' },
  { name: 'Kali Linux', logo: 'https://th.bing.com/th/id/OIP.M6n_qLCg1_xiWJqjs_qPgQHaHk?rs=1&pid=ImgDetMain' },
  { name: 'BPA', logo: 'https://e7.pngegg.com/pngimages/847/566/png-clipart-computer-icons-business-process-automation-industry-automate-business-process-industry.png' },
  { name: 'Node.js', logo: 'https://th.bing.com/th/id/R.9c83821480f50c983788c7c002c72944?rik=9bElGknv2XP5KA&pid=ImgRaw&r=0' },
  { name: 'React', logo: 'https://th.bing.com/th/id/OIP.LuafDFw71qlcXt-rekp-KAHaHI?rs=1&pid=ImgDetMain' },
  { name: 'CSS', logo: 'https://image.pngaaa.com/311/3920311-middle.png' },
  { name: 'HTML', logo: 'https://icon-library.com/images/html-icon/html-icon-12.jpg' },
  { name: 'Exoscale', logo: 'https://image.pngaaa.com/603/5328603-middle.png' },
  { name: 'Microsoft Excel', logo: 'https://logodownload.org/wp-content/uploads/2020/04/excel-logo-0.png' },
  { name: 'Cyber Forensics', logo: 'https://as2.ftcdn.net/v2/jpg/02/45/52/17/1000_F_245521738_UOvcmMBMAuO7ZVBwjk5kpjrILoExgn71.jpg' },
  { name: 'JavaScript', logo: 'https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png' }
];

function Skills() {
  return (
    <section className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-carousel">
        <div className="skills-wrapper">
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skills-box" key={index}>
                <img src={skill.logo} alt={skill.name} />
              </div>
            ))}
            {/* Duplicate list to make it continuous */}
            {skills.map((skill, index) => (
              <div className="skills-box" key={index + skills.length}>
                <img src={skill.logo} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
