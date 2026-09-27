import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Virginia — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const VA_ARTISTS: Artist[] = [
  {
    id: 'patsy-cline', name: 'Patsy Cline', kind: 'person', born: '1932-09-08',
    birthplace: 'Winchester, Virginia', cityId: 'us-va-winchester', regionId: 'us-va',
    genres: ['country'], eras: ['1950s', '1960s'], significance: 5,
    featuredTrack: tr('Crazy', 1961),
    eraTracks: { '1950s': tr("Walkin' After Midnight", 1957) },
    description: {
      en: 'A Winchester singer who worked local clubs and radio before her rich, torchy voice defined the 1960s Nashville sound.',
      pl: 'Wokalistka z Winchesteru, która śpiewała w lokalnych klubach i radiu, zanim jej głęboki, nastrojowy głos zdefiniował nashvillskie brzmienie lat 60.',
      ru: 'Певица из Уинчестера, выступавшая в местных клубах и на радио, прежде чем её глубокий голос определил нэшвиллский звук 1960-х.',
    },
  },
  {
    id: 'dave-matthews-band', name: 'Dave Matthews Band', kind: 'group', formed: 1991,
    cityId: 'us-va-charlottesville', regionId: 'us-va',
    genres: ['rock'], eras: ['1990s', '2000s'], significance: 4,
    featuredTrack: tr('Crash into Me', 1996),
    eraTracks: { '2000s': tr('The Space Between', 2001) },
    description: {
      en: 'Formed in Charlottesville bars, they grew into one of America’s biggest touring bands with jazzy, jam-friendly rock.',
      pl: 'Założony w barach Charlottesville zespół stał się jednym z największych koncertowych zespołów w USA dzięki jazzującemu rockowi z improwizacjami.',
      ru: 'Сложившаяся в барах Шарлотсвилла группа стала одним из главных гастрольных коллективов США благодаря джазовому рок-звучанию с импровизациями.',
    },
  },
  {
    id: 'missy-elliott', name: 'Missy Elliott', kind: 'person', born: '1971-07-01',
    birthplace: 'Portsmouth, Virginia', cityId: 'us-va-portsmouth', regionId: 'us-va',
    genres: ['hiphop', 'rnb'], eras: ['1990s', '2000s'], significance: 5,
    featuredTrack: tr('Get Ur Freak On', 2001),
    eraTracks: { '1990s': tr('The Rain (Supa Dupa Fly)', 1997) },
    description: {
      en: 'A Portsmouth visionary who made playful, futuristic hip-hop with childhood friend Timbaland — the first female rapper in the Rock and Roll Hall of Fame.',
      pl: 'Wizjonerka z Portsmouth, która z przyjacielem z dzieciństwa Timbalandem tworzyła zabawny, futurystyczny hip-hop — pierwsza raperka w Rock and Roll Hall of Fame.',
      ru: 'Визионерка из Портсмута, вместе с другом детства Тимбалэндом создавшая игривый футуристичный хип-хоп, — первая рэперша в Зале славы рок-н-ролла.',
    },
  },
  {
    id: 'timbaland', name: 'Timbaland', kind: 'person', born: '1972-03-10',
    birthplace: 'Norfolk, Virginia', cityId: 'us-va-norfolk', regionId: 'us-va',
    genres: ['hiphop', 'rnb'], eras: ['1990s', '2000s'], significance: 4,
    featuredTrack: tr('The Way I Are', 2007),
    eraTracks: { '1990s': tr('Up Jumps da Boogie', 1997) },
    description: {
      en: 'A Norfolk producer whose stuttering, off-kilter beats for Aaliyah, Missy Elliott and Justin Timberlake redefined late-1990s and 2000s pop.',
      pl: 'Producent z Norfolk, którego rwane, rozchwiane bity dla Aaliyah, Missy Elliott i Justina Timberlake’a zdefiniowały pop końca lat 90. i lat 2000.',
      ru: 'Продюсер из Норфолка, чьи рваные, нарочито кривые биты для Алии, Мисси Эллиотт и Джастина Тимберлейка переопределили поп конца 1990-х и 2000-х.',
    },
  },
  {
    id: 'pharrell-williams', name: 'Pharrell Williams', kind: 'person', born: '1973-04-05',
    birthplace: 'Virginia Beach, Virginia', cityId: 'us-va-virginia-beach', regionId: 'us-va',
    genres: ['hiphop', 'pop', 'rnb'], eras: ['2000s', '2010s'], significance: 4,
    featuredTrack: tr('Happy', 2013),
    eraTracks: { '2000s': tr("Frontin'", 2003) },
    description: {
      en: 'Half of Virginia Beach’s production duo the Neptunes, whose minimal, bouncy beats were everywhere in the 2000s, before “Happy” made him a solo star.',
      pl: 'Połowa duetu producenckiego The Neptunes z Virginia Beach, którego minimalistyczne, sprężyste bity były wszędzie w latach 2000, zanim „Happy” uczyniło go gwiazdą solo.',
      ru: 'Половина продюсерского дуэта The Neptunes из Вирджиния-Бич, чьи минималистичные пружинистые биты звучали повсюду в 2000-х, пока «Happy» не сделал его сольной звездой.',
    },
  },
  {
    id: 'clipse', name: 'Clipse', kind: 'group', formed: 1992,
    cityId: 'us-va-virginia-beach', regionId: 'us-va',
    genres: ['hiphop'], eras: ['2000s'], significance: 3,
    featuredTrack: tr("Grindin'", 2002),
    description: {
      en: 'Brothers Pusha T and Malice paired cold, precise street rap with the Neptunes’ skeletal beats.',
      pl: 'Bracia Pusha T i Malice połączyli chłodny, precyzyjny uliczny rap z oszczędnymi bitami The Neptunes.',
      ru: 'Братья Pusha T и Malice соединили холодный, точный уличный рэп с аскетичными битами The Neptunes.',
    },
  },
];
