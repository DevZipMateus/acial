import React from 'react';
import { Badge, Briefcase, Building } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Board members data with image paths, names, positions and affiliations
const boardMembers = [
  {
    id: 1,
    name: 'Nilciane Aparecida Ramos Pawowski',
    role: 'Presidente',
    affiliation: 'R&P – Ramos e Pawowski Advocacia',
    image: '/lovable-uploads/1- Nilciane Aparecida Ramos Pawowski - Presidente.jpg',
    category: 'Diretoria',
    imageStyle: 'contain', // Fix for cropped image
  },
  {
    id: 2,
    name: 'Daniele Balbino Laibida',
    role: 'Vice-Presidente',
    affiliation: 'Advogada',
    image: '/lovable-uploads/2- Daniele Balbino Laibida (Vice-Presidente);.jpg',
    category: 'Diretoria',
    imageStyle: 'cover', // Default
  },
  {
    id: 3,
    name: 'Flávia Jeane Ferrari',
    role: 'Secretária Geral',
    affiliation: 'Advogada e empresária - FG Soluções Ambientais',
    image: '/lovable-uploads/3-Flávia Jeane Ferrari (Secretária Geral);.jpg',
    category: 'Diretoria',
    imageStyle: 'cover', // Fix for cropped image
  },
  {
    id: 4,
    name: 'Cynthia Ramin Mendes',
    role: 'Secretária Adjunta',
    affiliation: 'Influx Lapa',
    image: '/lovable-uploads/4- Cynthia Ramin Mendes (Secretária Adjunta);.jpg',
    category: 'Diretoria',
    imageStyle: 'cover', // Default
  },
  {
    id: 5,
    name: 'Suzana Maria Reicherdt Gorniski',
    role: 'Tesoureira',
    affiliation: 'Jornal A Tribuna Regional',
    image: '/lovable-uploads/5-Suzana Maria Reicherdt Gorniski (Tesoureira);.jpeg',
    category: 'Diretoria',
    imageStyle: 'cover', // Default
  },
  {
    id: 6,
    name: 'Kátia Cristina Santos Mendes',
    role: 'Diretora do Comércio',
    affiliation: 'Garimpo Presentes',
    image: '/lovable-uploads/6-Kátia Cristina Santos Mendes (Diretora do Comércio);.jpeg',
    category: 'Diretoria',
    imageStyle: 'cover', // Default
  },
  {
    id: 7,
    name: 'Rodrigo Dal Zotto Querubim',
    role: 'Diretor de Tecnologia e Marketing',
    affiliation: 'Odontoforte e Instituto Vetor',
    image: '/lovable-uploads/7  Rodrigo Dal Zotto Querubim (Diretor de Tecnologia e Marketing);.jpg',
    category: 'Diretoria',
    imageStyle: 'cover', // Default
  },
  {
    id: 8,
    name: 'Eraldo Correa do Nascimento',
    role: 'Diretor do Agronegócio',
    affiliation: 'Colégio Cooperativa e Cooperativa Agroindustrial Bom Jesus',
    image: '/lovable-uploads/8)  Eraldo Correa do Nascimento (Diretor do Agronegócio).jpeg',
    category: 'Diretoria',
    imageStyle: 'contain', // Fix for cropped image
  },
  {
    id: 9,
    name: 'Loriane de Jesus Martins',
    role: 'Diretora da Acial Jovem',
    affiliation: 'Salão Loriane e +Q básico',
    image: '/lovable-uploads/9-  Loriane de Jesus Martins (Diretora da Acial Jovem);.jpg',
    category: 'Diretoria',
    imageStyle: 'cover', // Default
  },
  {
    id: 10,
    name: 'Marco Antônio Machado Rosa',
    role: 'Diretor dos Profissionais Liberais e Prestadores de Serviço',
    affiliation: 'MR Marcenaria',
    image: '/lovable-uploads/10) Marco Antônio Machado Rosa (Diretor dos profissionais lliberais e prestadores de serviço).jpeg',
    category: 'Diretoria',
    imageStyle: 'contain', // Default
  },
  {
    id: 11,
    name: 'Michelli Mulhbauer Duda',
    role: 'Diretora de Eventos',
    affiliation: 'Office.com',
    image: '/lovable-uploads/11-  Michelli Mulhbauer Duda (Diretora de Eventos).jpg',
    category: 'Diretoria',
    imageStyle: 'contain', // Fix for cropped image
  },
  {
    id: 12,
    name: 'Thiago Cordeiro Gurski',
    role: 'Diretor de Relações Institucionais',
    affiliation: 'Ademicon Consórcios',
    image: '/lovable-uploads/12) Thiago Cordeiro Gurski (Diretor de Relações Institucionais).jpg',
    category: 'Diretoria',
    imageStyle: 'cover', // Default
  },
  {
    id: 13,
    name: 'Aline Cristina Mateus',
    role: 'Diretora de Responsabilidade Social',
    affiliation: 'Gerente PJ Cresol Triunfo Lapa',
    image: '/lovable-uploads/13) Aline Cristina Mateus (Diretora de Responsabilidade Social) .jpg',
    category: 'Diretoria',
    imageStyle: 'contain', // Fix for cropped image
  },
  {
    id: 14,
    name: 'Luiz Carlos Bruzamolin Filho',
    role: 'Diretor da Indústria',
    affiliation: 'Grupo Potencial',
    image: '/lovable-uploads/14) Luiz Carlos Bruzamolin Filho; (Diretor da Industria);  Grupo Potencial..jpeg',
    category: 'Diretoria',
    imageStyle: 'cover', // Default
  },
  {
    id: 15,
    name: 'Fernanda Gonçalves',
    role: 'Presidente do Conselho da Mulher Executiva Acial Mulher',
    affiliation: 'Helena Bonfart Boutique',
    image: '/lovable-uploads/15) Fernanda Gonçalves (Presidente do Conselho da Mulher Executiva Acial Mulher),.jpeg',
    category: 'Conselhos',
    imageStyle: 'cover', // Default
  },
  {
    id: 16,
    name: 'Sérgio Vinícius de Souza Júnior',
    role: 'Presidente do Conselho de Turismo, Cultura e Gastronomia',
    affiliation: 'Pousada Solar',
    image: '/lovable-uploads/16) Sérgio Vinícius de Souza Júnior (Presidente do Conselho de Turismo, Cultura e Gastronomia);.jpeg',
    category: 'Conselhos',
    imageStyle: 'contain', // Fix for cropped image
  },
  {
    id: 17,
    name: 'Natanael Piculski Schuster',
    role: 'Presidente do Núcleo de Inovação',
    affiliation: 'Fênix Tintas',
    image: '/lovable-uploads/17) Natanael Piculski Schuster (Presidente do Nucleo de Inovação).jpg',
    category: 'Conselhos',
    imageStyle: 'cover', // Default
  },
  {
    id: 18,
    name: 'Luiz Carlos Padilha',
    role: 'Conselheiro Fiscal',
    affiliation: 'Rede Megapasso Calçados',
    image: '/lovable-uploads/18) Luiz Carlos Padilha(Conselheiro Fiscal).jpeg',
    category: 'Conselho Fiscal',
    imageStyle: 'cover', // Default
  },
  {
    id: 19,
    name: 'Marina Gilaverte',
    role: 'Conselheira Fiscal',
    affiliation: 'Posto Lapeano',
    image: '/lovable-uploads/19) Marina Gilaverte - Conselheira Fiscal.jpeg',
    category: 'Conselho Fiscal',
    imageStyle: 'cover', // Default
  },
  {
    id: 20,
    name: 'Pablo Mathaus Correa Lopes',
    role: 'Conselheiro Fiscal',
    affiliation: 'Advogado e empresário – Delícias da Su',
    image: '/lovable-uploads/20) Pablo Mathaus Correa Lopes - Conselheiro Fiscal.jpg',
    category: 'Conselho Fiscal',
    imageStyle: 'contain', // Fix for cropped image
  },
];

// Staff members data with real information and images
const staffMembers = [
  {
    id: 1,
    name: 'Augusto Ferreira da Luz',
    role: 'Colaborador',
    image: '/lovable-uploads/Augusto Ferreira da Luz- Colaborador.jpeg',
    affiliation: '',
    category: 'Colaborador',
    imageStyle: 'cover', // Default
  },
  {
    id: 2,
    name: 'Célia Aparecida de Abreu Vianna',
    role: 'Colaboradora',
    image: '/lovable-uploads/Célia Aparecida de Abreu Vianna - Colaboradora.jpg',
    affiliation: '',
    category: 'Colaborador',
    imageStyle: 'contain', // Fix for cropped image
  },
  {
    id: 3,
    name: 'Emanuelle Gorniski',
    role: 'Departamento Jurídico',
    image: '/lovable-uploads/Emanuelle Gorniski - Departamento Jurídico.jpg',
    affiliation: '',
    category: 'Colaborador',
    imageStyle: 'contain', // Fix for cropped image
  },
  {
    id: 4,
    name: 'Lucas de Abreu Vianna',
    role: 'Colaborador',
    image: '/lovable-uploads/Lucas de Abreu Vianna - Colaborador.jpeg',
    affiliation: '',
    category: 'Colaborador',
    imageStyle: 'cover', // Default
  },
  {
    id: 5,
    name: 'Sandra de Fátima Vianna',
    role: 'Colaboradora',
    image: '/lovable-uploads/Sandra de Fátima Vianna - Colaboradora.jpg',
    affiliation: '',
    category: 'Colaborador',
    imageStyle: 'contain', // Fix for cropped image
  },
];

// Team member card component
const TeamMemberCard = ({ member }: { member: typeof boardMembers[0] }) => {
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('');

  // Default to 'cover' if imageStyle is not specified
  const objectFitStyle = member.imageStyle || 'cover';

  return (
    <Card className="hover:shadow-md transition-all duration-300 h-full">
      <CardContent className="p-4 flex flex-col items-center">
        <div className="w-full mb-4">
          <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name}
              className={`object-${objectFitStyle} object-center w-full h-full`}
            />
          </AspectRatio>
        </div>
        <h3 className="font-semibold text-center mb-1 text-gray-900">{member.name}</h3>
        <div className="flex items-center justify-center gap-1 text-acial-green/80 mb-1">
          <Badge size={14} className="shrink-0" />
          <span className="text-sm text-center">{member.role}</span>
        </div>
        {'affiliation' in member && member.affiliation && (
          <div className="flex items-center justify-center gap-1 text-gray-600 text-xs">
            <Building size={12} className="shrink-0" />
            <span className="text-center">{member.affiliation}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  // Filter board members by category
  const directorsMembers = boardMembers.filter(member => member.category === 'Diretoria');
  const councilMembers = boardMembers.filter(member => member.category === 'Conselhos');
  const fiscalMembers = boardMembers.filter(member => member.category === 'Conselho Fiscal');

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-acial-green/10 text-acial-green font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            <Briefcase size={16} className="inline-block mr-1" /> Nossa Equipe
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conheça os profissionais que fazem a ACIAL
          </h2>
          <p className="text-gray-600 text-lg">
            Nossa equipe é composta por diretores voluntários e colaboradores dedicados para melhor atender os associados e a comunidade empresarial da Lapa.
          </p>
        </div>
        
        {/* Directors Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Diretoria</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {directorsMembers.map((member) => (
              <div key={member.id} className="animate-fade-in" style={{ animationDelay: `${member.id * 0.05}s` }}>
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Council Presidents Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Presidentes dos Conselhos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {councilMembers.map((member) => (
              <div key={member.id} className="animate-fade-in" style={{ animationDelay: `${member.id * 0.05}s` }}>
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Fiscal Council Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Conselho Fiscal</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {fiscalMembers.map((member) => (
              <div key={member.id} className="animate-fade-in" style={{ animationDelay: `${member.id * 0.05}s` }}>
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Staff Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Colaboradores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {staffMembers.map((member) => (
              <div key={member.id} className="animate-fade-in" style={{ animationDelay: `${member.id * 0.05}s` }}>
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
