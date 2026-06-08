// Dados do portfólio
// Lista de trabalhos realizados.
// As imagens devem estar fisicamente na pasta public/portfolio/ ou usar URLs externas completas (no caso do demo, Picsum).

import { StaticImageData } from 'next/image';

// Importando as novas imagens fornecidas
import port1 from '@/src/assets/images/regenerated_image_1779686399071.jpg';
import port2 from '@/src/assets/images/regenerated_image_1779686401233.jpg';
import port3 from '@/src/assets/images/regenerated_image_1779686403596.png';
import port4 from '@/src/assets/images/regenerated_image_1779686406358.png';
import port5 from '@/src/assets/images/regenerated_image_1779686400173.jpg';
import port6 from '@/src/assets/images/regenerated_image_1779686402290.png';
import port7 from '@/src/assets/images/regenerated_image_1779686404912.png';
import port8 from '@/src/assets/images/regenerated_image_1779686407723.png';

export interface TattooProject {
  id: string;
  imageUrl: string | StaticImageData;
  style: string;
  size: string;
  placement: string;
  alt: string;
}

export const PORTFOLIO_DATA: TattooProject[] = [
  {
    id: '1',
    imageUrl: port1,
    style: 'Blackwork',
    size: '18cm',
    placement: 'Antebraço',
    alt: 'Tatuagem em estilo blackwork no antebraço'
  },
  {
    id: '2',
    imageUrl: port2,
    style: 'Realismo Dark',
    size: '25cm',
    placement: 'Costela',
    alt: 'Tatuagem em estilo realismo dark na costela'
  },
  {
    id: '3',
    imageUrl: port3,
    style: 'Iconografia',
    size: '15cm',
    placement: 'Panturrilha',
    alt: 'Tatuagem de iconografia na panturrilha'
  },
  {
    id: '4',
    imageUrl: port4,
    style: 'Blackwork',
    size: 'Fechamento',
    placement: 'Braço',
    alt: 'Fechamento de braço em blackwork'
  },
  {
    id: '5',
    imageUrl: port5,
    style: 'Dotwork',
    size: '12cm',
    placement: 'Costas',
    alt: 'Tatuagem em pontilhismo nas costas'
  },
  {
    id: '6',
    imageUrl: port6,
    style: 'Linework',
    size: '20cm',
    placement: 'Peito',
    alt: 'Linework pesado no peito'
  },
  {
    id: '7',
    imageUrl: port7,
    style: 'Realismo Dark',
    size: 'Fechamento',
    placement: 'Perna',
    alt: 'Fechamento de perna em realismo dark'
  },
  {
    id: '8',
    imageUrl: port8,
    style: 'Blackwork',
    size: '10cm',
    placement: 'Mão',
    alt: 'Tatuagem blackwork na mão'
  }
];
