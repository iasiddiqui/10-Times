import React from 'react';

// Data component for paragraphs
const PastConferenceData = ({ selected, onSelect }) => {
  // Define paragraphs for each link
  const paragraphs = {
    stripe2024: `
    Magnus Group successfully completed the "5th Edition of International Conference on Materials Science and Engineering (MAT 2023)," happening from September 25-27, 2023. This Hybrid mode allows you to participate as in-person in Valencia, Spain or Virtual from your home or work.

    This global summit is all about “Exceeding Vision in Materials Science and Engineering through Novel Innovations.” It's a special chance for scientists and professionals to stay updated in this rapidly changing field by learning about the latest discoveries in minerals, metallurgy, and materials.

    Materials 2023 covers everything about materials science and engineering, including nanomaterials and polymers. It's like a bridge connecting scientists, researchers, and industry professionals who work on research, development, and production. This event is an excellent place to meet experts, learn about the basics, applications, and products in these areas.

    We believe that this event will be another significant and valuable global scientific conference, making substantial contributions to the field of science.

    For MAT 2023 Final Program: Click Here
    For MAT 2023 Abstract Book: Click Here
    For MAT 2023 Gallery: Click Here

    Upcoming Materials Science Conferences: Materials Science Conferences 2024 | Materials Science and Engineering Conference | Materials Congress | Materials Science Conference 2024 | Materials Conferences | Materials Conference | Material Science Conferences | Materials Science and Engineering Conferences 2024 | Materials Science Congress

    Keynote Presentations:
    Zhongwei Guan - Advanced Materials Research Centre of Technology Innovation Institute, United Arab Emirates
    Paulo Cesar De Morais - Catholic University of Brasilia, Brazil
    Shuji Owada - Waseda University, Japan
    Patil Devidas Ramrao - Rani Laxmibai Mahavidyalaya, India
    Leelakrishna Reddy - University of Johannesburg, South Africa
    Sergey Suchkov - Institute for Biotech & Global Health of RosBioTech and A.I. Evdokimov MGMSU, Russia
    Zakaria Boumerzoug - University of Biskra, Algeria
    Osman Adiguzel - Firat University, Turkey
    Yarub Al Douri - American University of Iraq, Iraq

    Oral Presentations:
    Eder Socrates Najar Lopes - University of Campinas, Brazil
    Dominika Beata Kwidzinska - Gdansk University of Technology, Poland
    Marianela Escobar Castillo - University of Duisburg-Essen, Germany
    Lais Pellizzer Gabriel - State University of Campinas, Brazil
    Jaume Camarasa - University of Lleida, Spain
    Norbert Varga - University of Szeged, Hungary
    Adam Juhasz - University of Szeged, Hungary
    Andreas K Huttel - University of Regensburg, Germany
    Milind Bhandare - Mahatma Phule Mahavidyalaya, India
    Alessandro Sergi - TWI Ltd, United Kingdom
    Alina Vladescu (Dragomir) - National Institute of Research and Development for Optoelectronics, Romania
    Iuliia Bespalko - Federal Research Center Boreskov Institute of Catalysis, Russian Federation
    Jyi Tsong Lin - National Sun Yat-Sen University, Taiwan
    Toshihiko Yoshimura - Sanyo-Onoda City University, Japan
    Wojciech J Nowak - Rzeszow University of Technology, Poland
    Mothibeli Pita - University of South Africa, South Africa
    Mircea Teodor Nechita - Gheorghe Asachi Technical University of Iasi, Romania
    Chung Shin Jonathan Yuan - National Sun Yat-sen University, Taiwan
    Izabell Craciunescu - National Institute for Research and Development of Isotopic and Molecular Technologies, Romania
    Kamal Ahmed Mahmood - New Orientation Institute, Iraq
    Rahul Saha - National Institute of Technology Hamirpur, India
    Erol Sancaktar - University of Akron, United States
    Roger Rothon - Rothon Research Limited and the University of Chester, United Kingdom
    Taila Veloso de Oliveira - Federal University of Vicosa, Brazil
    Robert Buenker - Princeton University, Germany
    Mohammed Al Bahri - A'Sharqiyah University, Oman
    Sharda Sundaram Sanjay - An Autonomous PG College of University of Allahabad, India
    Delia Teresa Sponza - Dokuz Eylül University, Turkey
    Mikhail Petrovich Kashchenko - Ural State Forest Engineering University, Russia
    Ernst Titovets - Clinical Center of Neurology and Neurosurgery, Belarus
    Sivasubramanian Palanisamy - Kalasalingam Academy of Research and Education, India
    Anowar Hossain - RMIT University, Australia
    Suwen Chen - Tongji University, China
    Shaoqing Wang - China University of Mining & Technology, China
    Bakari Chaka - Maasai Mara University, Kenya
    Vyacheslav Shulunov - Institute of Physical Materials Science of the Siberian Branch of the Russian Academy of Science, Russia
    Vladimir Chigrinov - Hong Kong University of Science and Technology, Hong Kong
    Evgeny Grigoryev - Merzhanov Institute of Structural Macrokinetics and Materials Science, Russia
    Pooja Yadav - JNARDDC, India
    Igor V Shevchenko - M.P. Semenenko Institute of Geochemistry, Ukraine
    N O Gopal - Vikrama Simhapuri University College, India
    Keerthiprasad K S - Vidya Vikas Institute of Engineering & Technology, India
    Michael Tribelsky - Lomonosov Moscow State University, Russia
    Aroussy Youssef - Hassan II University, Morocco
    Edith Johanna Diaz Canas - Universidad Industrial de Santander, Colombia
    Melnyk Igor - National Technical University of Ukraine, Ukraine
    Samuel Chisa Dike - Rivers State University, Nigeria
    Uroosa Ejaz - Shaheed Zulfikar Ali Bhutto Institute of Science and Technology, Pakistan

    Poster Presentations:
    Graziella Kassick Saft - PIEP-Innovation in Polymer Engineering, Portugal
    Silvia Stifano - Curapath (Polypeptide Therapeutic Solutions S.L.), Spain
    Anasiei Ioana - National R&D Institute for Nonferrous and Rare Metals, Romania
    Wilber Ortiz Lago - University of Puerto Rico Rio Piedras, Puerto Rico
    Tsisana Gavasheli - Ivane Javakhishvili Tbilisi State University, Georgia
    Simona Ravaszova - Brno University of Technology, Czech Republic
    Andrey Rabin - Ben Gurion University of the Negev, Israel
    Petra Lacikova - Brno University of Technology, Czech Republic
    Mei-Yi Liu - National Chin-Yi University of Technology, Taiwan
    Ioana–Cristina Badea - National R&D Institute for Nonferrous and Rare Metals, Romania
    Mona Mihailescu - Politehnica University Bucharest, Romania
    Irina Ungureanu (Negut) - National Institute for Lasers, Plasma and Radiation Physics, Romania
    Olga Guskova - IPF Dresden, Germany
    Manankov Anatoli Vasilyevich - Tomsk State University of Architecture and Building, Russia
    Christos P Beretas - Innovative Knowledge Institute, France
    Aissat Sahraoui - Ibn Khaldoun University, Algeria

    Upcoming Materials Science Conferences:
    Conference Name: 8th Edition of International Conference on Materials Science and Engineering 
    Dates: March 10-12, 2025
    Venue: Rome, Italy

    Conference Name: 7th Edition of International Conference on Materials Science and Engineering 
    Dates: October 28-30, 2024 
    Venue: Online Event

    Upcoming Nanotechnology Conferences:
    Conference Name: 10th Edition of World Nanotechnology Conference 
    Dates: March 10-12, 2025
    Venue: Rome, Italy

    Conference Name: 9th Edition of World Nanotechnology Conference 
    Dates: October 28-30, 2024 
    Venue: Online Event

    Upcoming Pharma Conferences:
    Conference Name: 11th Edition of Global Conference on Pharmaceutics and Novel Drug Delivery Systems 
    Dates: September 19-21, 2024 
    Venue: Rome, Italy 

    Upcoming Biotechnology Conferences:
    Conference Name: 4th Edition of Euro-Global Conference on Biotechnology and Bioengineering 
    Dates: September 19-21, 2024 
    Venue: Rome, Italy

    For Magnus Group Conferences Reviews:
    Magnus Group Materials Conferences Reviews | Magnus Conferences Reviews
  `,
    stripe2023: "This is the paragraph for Stripe 2023.",
    stripe: "This is the paragraph for Stripe.",
    stripe2021: "This is the paragraph for Stripe 2021."
  };

  return (
    <div className="past-conference-content-box">
      {selected && <p>{paragraphs[selected]}</p>}
    </div>
  );
};

export default PastConferenceData;
