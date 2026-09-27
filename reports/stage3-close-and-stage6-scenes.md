# Atlas of Sound — закрытие Stage 3 и анализ Stage 6 (Musical Scenes)

Дата: 2026-09-26

---

# Часть 1. Stage 3 закрыт

## 1. Что исправлено

**Fugees** — единственное подтверждённое внутреннее противоречие.
Описание (EN/PL/RU) теперь объясняет привязку к городу: «Formed in South Orange, just outside Newark». `cityId` не менялся.

**Эпохи по новому правилу** — 5 артистов, каждой новой эпохе добавлен трек:

| Артист | Эпохи | Трек новой эпохи |
|---|---|---|
| Jay-Z | + 1990-е | «Hard Knock Life (Ghetto Anthem)» 1998 |
| Billie Holiday | + 1950-е | «Lady Sings the Blues» 1956 |
| Soundgarden | + 1980-е | «Loud Love» 1989 |
| Isaac Hayes | + 1960-е | «Walk On By» 1969 |
| Red Hot Chili Peppers | + 1980-е, 2000-е | «Higher Ground» 1989, «By the Way» 2002 |

**Зафиксированы редакционные правила** в `CONTENT_GUIDELINES.md`:

- **§3 `cityId`** — главный город, с которым артист/группа прежде всего связаны в контексте музыкальной сцены Atlas of Sound. Для групп:
  1. город образования, если он — очевидная часть музыкальной идентичности;
  2. иначе — главный город ранней/ключевой сцены;
  3. дополнительные города — через `places`.
- **§5 `eras`** — десятилетия значимой музыкальной активности или влияния артиста в контексте атласа, а не только год дебюта и не только пик карьеры.

## 2. Сознательно оставлено как editorial choice

- **Шесть групп** уже соответствуют новому правилу `cityId`:
  - по городу образования: O'Jays → Canton, Nirvana → Aberdeen, Earth, Wind & Fire → Chicago;
  - по городу ключевой сцены: Metallica → San Francisco, Allman Brothers → Macon, Portugal. The Man → Portland.
- **Lauryn Hill → Newark** — основной город агломерации.
- **Hank Williams → Нэшвилл** — сцена, с которой он связан в атласе.
- **Patti LaBelle — «Lady Marmalade»** — трек её группы Labelle; описание говорит об этом прямо.
- **Треки вне эпохи** у J Dilla, Gabby Pahinui, Sonny Boy Williamson II — допускается стандартом (§8).
- **Соседние маркеры** (Hoboken / Jersey City / NYC, Chapel Hill / Carrboro, Norfolk / Portsmouth) — реальные разные города.

## 3. Некритичный долг

- **Hatebreed** — Bridgeport или New Haven, нужна внешняя сверка.
- **Gabby Pahinui** — место рождения (Lahaina или Kakaʻako), уверенность низкая.
- **Big Joe Turner** — 1940-е подходят по правилу, но подтверждённый трек эпохи не найден.
- **Узкие эпохи** — возможные другие случаи массово не искались.

## 4. Проверки

| Проверка | Результат |
|---|---|
| typecheck | OK |
| validation (`npm run validate:data`) | 0 ошибок, 15 предупреждений, 6 заметок — новые треки заметок не добавили |
| self-tests | 28/28 |
| build | OK, прежнее предупреждение о большом JS-файле |

Примечание: скрипта `npm run validate` в проекте нет, валидация данных — `npm run validate:data`.

Интерфейс не менялся. Изменённые файлы: `nj.ts`, `ny.ts`, `wa.ts`, `tn.ts`, `ca.ts`, `CONTENT_GUIDELINES.md`.

**Stage 3 закрыт.**

---

# Часть 2. Stage 6 — Musical Scenes / Movements (анализ и предложение модели)

Только анализ. Код не менялся.

## 1. Что уже есть в архитектуре

- У артиста есть `cityId`, `genres`, `eras` — из них уже считаются `cityProfile` и все выборки.
- В Explore уже есть блок «Города и сцены» и «созвездия» артистов вокруг городов — место для сцен в интерфейсе готово.
- Stage 2 дал `places` (дополнительные города артиста) и `sources` (источники).
- Контент лежит по странам (`countries/us/content/`) — сцены ложатся туда же, ядро универсализировать не нужно.

## 2. Ключевое решение: состав сцены задаётся явно, а не вычисляется

Сцену нельзя получить как «город + жанр + эпоха».
Пример: Detroit + соул + 1960-е даёт Supremes, Smokey Robinson, Marvin Gaye (это Motown), но также Aretha Franklin (Atlantic) и Jackie Wilson (Brunswick), которые к Motown не относились.

Поэтому состав сцены — редакционный список `artistIds`. Вычисления используются только для проверок и подсказок.

## 3. Минимальная модель

```ts
export const SCENE_LINKS = ['influenced', 'evolvedInto', 'contemporaryOf'] as const;

export interface SceneLink {
  sceneId: string;
  kind: (typeof SCENE_LINKS)[number]; // направленная связь: эта сцена → sceneId
}

export interface Scene {
  id: string;                 // 'us-motown'
  name: LocalizedText;        // 'Motown' / 'Motown' / 'Мотаун'
  cityIds: string[];          // 1+ городов атласа; регионы вычисляются через city.regionId
  eras: EraId[];              // навигационный период
  from?: number;              // фактические годы — необязательно (как у Artist)
  to?: number;
  genres: GenreId[];
  artistIds: string[];        // редакционный состав, только артисты из датасета
  description: LocalizedText; // короткий редакционный текст (≤ 220)
  related?: SceneLink[];
  sources?: Source[];         // тип из Stage 2
}

// CountryContent: + scenes?: Scene[]   (необязательно — страна без сцен работает как сейчас)
```

### Что намеренно не добавляется

| Не добавляем | Почему |
|---|---|
| `regionId` у сцены | Регионы вычисляются из городов; сцена может охватывать несколько штатов (Memphis + Muscle Shoals soul) |
| `sceneIds` у артиста | Связь хранится только у сцены; обратное направление даёт селектор |
| Отдельный тип «movement» | Движение — это сцена с несколькими городами (гранж: Seattle, Olympia, Aberdeen) |
| Граф влияний | `related` — просто список ссылок; полноценный граф — на этапе Influence |

## 4. Селекторы

- `countryScenes(country)`, `getScene(country, id)`
- `scenesForRegion(country, regionId, { eraId?, genres? })` — через города сцены
- `scenesForCity(country, cityId)`
- `artistScenes(country, artistId)` — обратная связь
- `sceneArtists(country, scene, eraId?)` — состав сцены, отфильтрованный по текущей эпохе

## 5. Валидация

**Ошибки:**
- дубль id сцены;
- неизвестный город, артист, жанр или эпоха;
- `related` ссылается на несуществующую сцену или на саму себя;
- пустой перевод;
- у сцены нет городов или артистов.

**Предупреждения:**
- у артиста нет общих эпох со сценой;
- город артиста не входит в города сцены — допустимо (O'Jays привязаны к Canton, но входят в Philly soul), поэтому только предупреждение;
- в сцене меньше 2 артистов;
- у артиста нет ни одного жанра сцены.

## 6. Стартовый набор для США (только существующие артисты)

| Сцена | Города | Эпохи | Артисты из датасета |
|---|---|---|---|
| Motown | Detroit | 1960-е, 1970-е | Supremes, Smokey Robinson, Marvin Gaye, Stevie Wonder |
| Chicago blues | Chicago | 1940-е, 1950-е | Muddy Waters, Howlin' Wolf, Bo Diddley |
| Sun Records / Memphis rock 'n' roll | Memphis | 1950-е | Elvis Presley, Johnny Cash |
| Philly soul | Philadelphia | 1970-е | Harold Melvin & the Blue Notes, O'Jays (Canton), Hall & Oates |
| Seattle grunge | Seattle, Aberdeen | 1990-е | Nirvana, Soundgarden, Pearl Jam, Alice in Chains |
| West Coast G-funk | Compton, Long Beach | 1990-е | Dr. Dre, Snoop Dogg (+ N.W.A как предшественник) |
| Atlanta trap | Atlanta | 2000-е, 2010-е | T.I., Future, Migos, Lil Baby |
| Athens, GA | Athens | 1980-е | R.E.M., The B-52's |

**Связи-примеры:** Chicago blues → influenced → Memphis rock 'n' roll; N.W.A → evolvedInto → G-funk.

**Кандидаты на потом:** Detroit techno, Chicago house — в датасете по одному артисту; по правилу «минимум 2 артиста» пока не создаём.

## 7. Что будет затронуто при реализации

1. `src/data/types.ts` — `Scene`, `SceneLink`, `CountryContent.scenes?`.
2. `src/data/countries/us/content/scenes.ts` + подключение в `countries/us/index.ts`.
3. `src/data/selectors.ts` — 5 селекторов выше.
4. `src/data/validation.ts` + self-test — правила выше.
5. `CONTENT_GUIDELINES.md` — §14 «Сцены».
6. Интерфейс — отдельным шагом: блок «Города и сцены» в Explore, строки сцен, подсветка состава сцены в созвездии. Без новых страниц.

## 8. Открытые решения на старте Stage 6

1. **Название сцены на RU:** переводить («Чикагский блюз») или оставлять имя собственное («Motown»)?
   Предложение: имена собственные сохраняем, описательные названия переводим.
2. **Где показывать сцены в первой версии:** только в Explore штата или ещё в hover-card?
   Предложение: начать с Explore.
