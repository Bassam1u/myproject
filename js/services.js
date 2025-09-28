
//هاذي مصفوفة من البيانات 
const SERVICES = [
  { 
    id: 1, 
    title: 'Application Development', 
    desc: 'Web & Mobile apps built with scalability and modern standards.', 
    image: 'images/services/service1.jpg' 
  },
  { 
    id: 2, 
    title: 'Website Design & Development', 
    desc: 'Responsive, performant websites tailored to your brand.', 
    image: 'images/services/service2.jpg' 
  },
  { 
    id: 3, 
    title: 'Cybersecurity Services', 
    desc: 'Vulnerability assessments, penetration testing, and incident response.', 
    image: 'images/services/service3.jpg' 
  },
  { 
    id: 4, 
    title: 'Security Operations', 
    desc: 'Managed detection & response, continuous monitoring and hardening.', 
    image: 'images/services/service4.jpg' 
  },
  { 
    id: 5, 
    title: 'Security Consultancy', 
    desc: 'Risk assessment, compliance and security architecture design.', 
    image: 'images/services/service5.jpg' 
  },
  { 
    id: 6, 
    title: 'DevOps & Cloud', 
    desc: 'CI/CD, cloud migration, and secure infrastructure automation.', 
    image: 'images/services/service6.jpg' 
  },
];
//هاذي لانشاء شكل لاضافة ال بيانات الي في المصفوفة اليها 
function renderServices(id='services-grid'){
  const grid = document.getElementById(id); 
  if(!grid) return;
  grid.innerHTML='';

  SERVICES.forEach(s=>{
    const el = document.createElement('article'); 
    el.className='service';
    el.innerHTML = `
      <h4>${s.title}</h4>
      <p >${s.desc}</p>
      <div style='text-align:right;margin-top:8px'>
        <button class="btn" onclick="openModal('<img src=${s.image} style=\\'width:100%;height:200px;border-radius:6px\\'><h3>${s.title}</h3><p>${s.desc}</p>')">more</button>
      </div>`;
    grid.appendChild(el);
  });
}

document.addEventListener('DOMContentLoaded', ()=> renderServices());
