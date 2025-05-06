import React from 'react';
import { Badge, Briefcase } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

// Board members data with image paths, names and positions
const boardMembers = [
  {
    id: 1,
    name: 'Nilciane Aparecida Ramos Pawowski',
    role: 'Presidente',
    image: '/lovable-uploads/1- Nilciane Aparecida Ramos Pawowski - Presidente.jpg',
  },
  {
    id: 2,
    name: 'Daniele Balbino Laibida',
    role: 'Vice-Presidente',
    image: '/lovable-uploads/2- Daniele Balbino Laibida (Vice-Presidente);.jpg',
  },
  {
    id: 3,
    name: 'Flávia Jeane Ferrari',
    role: 'Secretária Geral',
    image: '/lovable-uploads/3-Flávia Jeane Ferrari (Secretária Geral);.jpg',
  },
  {
    id: 4,
    name: 'Cynthia Ramin Mendes',
    role: 'Secretária Adjunta',
    image: '/lovable-uploads/4- Cynthia Ramin Mendes (Secretária Adjunta);.jpg',
  },
  {
    id: 5,
    name: 'Suzana Maria Reicherdt Gorniski',
    role: 'Tesoureira',
    image: '/lovable-uploads/5-Suzana Maria Reicherdt Gorniski (Tesoureira);.jpeg',
  },
  {
    id: 6,
    name: 'Kátia Cristina Santos Mendes',
    role: 'Diretora do Comércio',
    image: '/lovable-uploads/6-Kátia Cristina Santos Mendes (Diretora do Comércio);.jpeg',
  },
  {
    id: 7,
    name: 'Rodrigo Dal Zotto Querubim',
    role: 'Diretor de Tecnologia e Marketing',
    image: '/lovable-uploads/7  Rodrigo Dal Zotto Querubim (Diretor de Tecnologia e Marketing);.jpg',
  },
  {
    id: 8,
    name: 'Eraldo Correa do Nascimento',
    role: 'Diretor do Agronegócio',
    image: '/lovable-uploads/8)  Eraldo Correa do Nascimento (Diretor do Agronegócio).jpeg',
  },
  {
    id: 9,
    name: 'Loriane de Jesus Martins',
    role: 'Diretora da Acial Jovem',
    image: '/lovable-uploads/9-  Loriane de Jesus Martins (Diretora da Acial Jovem);.jpg',
  },
  {
    id: 10,
    name: 'Marco Antônio Machado Rosa',
    role: 'Diretor dos Profissionais Liberais e Prestadores de Serviço',
    image: '/lovable-uploads/10) Marco Antônio Machado Rosa (Diretor dos profissionais lliberais e prestadores de serviço).jpeg',
  },
  {
    id: 11,
    name: 'Michelli Mulhbauer Duda',
    role: 'Diretora de Eventos',
    image: '/lovable-uploads/11-  Michelli Mulhbauer Duda (Diretora de Eventos).jpg',
  },
  {
    id: 12,
    name: 'Thiago Cordeiro Gurski',
    role: 'Diretor de Relações Institucionais',
    image: '/lovable-uploads/12) Thiago Cordeiro Gurski (Diretor de Relações Institucionais).jpg',
  },
  {
    id: 13,
    name: 'Aline Cristina Mateus',
    role: 'Diretora de Responsabilidade Social',
    image: '/lovable-uploads/13) Aline Cristina Mateus (Diretora de Responsabilidade Social) .jpg',
  },
  {
    id: 14,
    name: 'Luiz Carlos Bruzamolin Filho',
    role: 'Diretor da Indústria',
    image: '/lovable-uploads/14) Luiz Carlos Bruzamolin Filho; (Diretor da Industria);  Grupo Potencial..jpeg',
  },
  {
    id: 15,
    name: 'Fernanda Gonçalves',
    role: 'Presidente do Conselho da Mulher Executiva Acial Mulher',
    image: '/lovable-uploads/15) Fernanda Gonçalves (Presidente do Conselho da Mulher Executiva Acial Mulher),.jpeg',
  },
  {
    id: 16,
    name: 'Sérgio Vinícius de Souza Júnior',
    role: 'Presidente do Conselho de Turismo, Cultura e Gastronomia',
    image: '/lovable-uploads/16) Sérgio Vinícius de Souza Júnior (Presidente do Conselho de Turismo, Cultura e Gastronomia);.jpeg',
  },
  {
    id: 17,
    name: 'Natanael Piculski Schuster',
    role: 'Presidente do Núcleo de Inovação',
    image: '/lovable-uploads/17) Natanael Piculski Schuster (Presidente do Nucleo de Inovação).jpg',
  },
  {
    id: 18,
    name: 'Luiz Carlos Padilha',
    role: 'Conselheiro Fiscal',
    image: '/lovable-uploads/18) Luiz Carlos Padilha(Conselheiro Fiscal).jpeg',
  },
  {
    id: 19,
    name: 'Marina Gilaverte',
    role: 'Conselheira Fiscal',
    image: '/lovable-uploads/19) Marina Gilaverte - Conselheira Fiscal.jpeg',
  },
  {
    id: 20,
    name: 'Pablo Mathaus Correa Lopes',
    role: 'Conselheiro Fiscal',
    image: '/lovable-uploads/20) Pablo Mathaus Correa Lopes - Conselheiro Fiscal.jpg',
  },
];

// Staff members data with real information and images
const staffMembers = [
  {
    id: 1,
    name: 'Augusto Ferreira da Luz',
    role: 'Colaborador',
    image: '/lovable-uploads/Augusto Ferreira da Luz- Colaborador.jpeg',
  },
  {
    id: 2,
    name: 'Célia Aparecida de Abreu Vianna',
    role: 'Colaboradora',
    image: '/lovable-uploads/Célia Aparecida de Abreu Vianna - Colaboradora.jpg',
  },
  {
    id: 3,
    name: 'Emanuelle Gorniski',
    role: 'Departamento Jurídico',
    image: '/lovable-uploads/Emanuelle Gorniski - Departamento Jurídico.jpg',
  },
  {
    id: 4,
    name: 'Lucas de Abreu Vianna',
    role: 'Colaborador',
    image: '/lovable-uploads/Lucas de Abreu Vianna - Colaborador.jpeg',
  },
  {
    id: 5,
    name: 'Sandra de Fátima Vianna',
    role: 'Colaboradora',
    image: '/lovable-uploads/Sandra de Fátima Vianna - Colaboradora.jpg',
  },
];

// Team member card component
const TeamMemberCard = ({ member }: { member: typeof boardMembers[0] }) => {
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('');

  return (
    <Card className="hover:shadow-md transition-all duration-300 h-full">
      <CardContent className="p-4 flex flex-col items-center">
        <Avatar className="h-32 w-32 mb-4 border-2 border-acial-green">
          <AvatarImage 
            src={member.image} 
            alt={member.name}
            className="object-cover"
          />
          <AvatarFallback className="bg-acial-green text-white text-xl">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-center mb-1 text-gray-900">{member.name}</h3>
        <div className="flex items-center justify-center gap-1 text-acial-green/80">
          <Badge size={14} className="shrink-0" />
          <span className="text-sm text-center">{member.role}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  return (
    <section id="equipe" className="section bg-gradient-to-b from-white to-gray-50">
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
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Diretoria</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {boardMembers.map((member) => (
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
