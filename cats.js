// I LOVE CATS

let catBreeds = [
  'Abyssinian',
  'American Bobtail',
  'American Curl',
  'American Shorthair',
  'American Wirehair',
  'Balinese',
  'Bengal',
  'Birman',
  'Bombay',
  'British Shorthair',
  'Burmese',
  'Chartreux',
  'Cornish Rex',
  'Devon Rex',
  'Egyptian Mau',
  'Exotic Shorthair',
  'Havana Brown',
  'Himalayan',
  'Japanese Bobtail',
  'Maine Coon',
  'Manx',
  'Norwegian Forest',
  'Ocicat',
  'Oriental',
  'Persian',
  'Ragdoll',
  'Russian Blue',
  'Scottish Fold',
  'Siamese',
  'Siberian',
  'Sphynx',
  'Tortoiseshell'
];

class CAT {
  getInfo() {
    return {
      id: 'ilovecats',
      name: 'CATS',
      color1: '#7868B5',
      color2: '#564B7F',
      color3: '#3C3456',
      blocks: [
        {
          opcode: 'randomcatfact',
          blockType: Scratch.BlockType.REPORTER,
          text: 'random cat fact from [FORMAT]',
          disableMonitor: true,
          arguments: {
            FORMAT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'FORMAT_MENU'
            }
          }
        },
        {
          opcode: 'catscool',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'are cats cool?',
          disableMonitor: true,
        },
        {
          opcode: 'catinfo',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get info of breed [BREED]',
          disableMonitor: true,
          arguments: {
            BREED: {
              type: Scratch.ArgumentType.STRING,
              menu: 'BREED_MENU'
            }
          }
        }
      ],
      menus: {
        FORMAT_MENU: {
          acceptReporters: true,
          items: ['source 1', 'source 2']
        },
        BREED_MENU: {
          acceptReporters: true,
          items: catBreeds
        }
      }
    };
  }

  randomcatfact(args) {
    if (args.FORMAT = "source 1") {
      return fetch("https://meowfacts.herokuapp.com/")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not OK.');
          }
        })
        .then((data) => {
          return data.data;
        })
        .catch((error) => {
          console.error(error);
          return 'Uh oh! Something went wrong.';
        });
    } else {
      return fetch("https://catfact.ninja/fact")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not OK.');
          }
        })
        .then((data) => {
          return data.fact;
        })
        .catch((error) => {
          console.error(error);
          return 'Uh oh! Something went wrong.';
        });
    }
  }
  catscool() {
    return true
  }
  catinfo(args) {
    if (!catBreeds.includes(args.BREED)) {
      // `args.BREED` is not any of the cat breeds in the `catBreeds` array
      return "I won't let you exploit this."
    }

    var breedsWithoutCat = [
      "American Bobtail",
      "American Curl",
      "American Shorthair",
      "American Curlhair",
      "Birman",
      "British Shorthair",
      "Chartreux",
      "Cornish Rex",
      "Devon Rex",
      "Egyptian Mau",
      "Exotic Shorthair",
      "Havana Brown",
      "Japanese Bobtail",
      "Maine Coon",
      "Norwegian Forest",
      "Ocicat",
      "Oriental",
      "Ragdoll",
      "Russian Blue",
      "Scottish Fold"
    ];

    var breed = args.BREED
    var includeCat = breedsWithoutCat.includes(breed);

    if (!includeCat) {
      breed += " cat";
    }

    return fetch("https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=1&titles=" + encodeURIComponent(breed) + "&explaintext=1&exsectionformat=plain&format=json&origin=*")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not OK.');
        }
      })
      .then((data) => {
        // Extract the relevant information from the data object
        const pageId = Object.keys(data.query.pages)[0];
        let extract = data.query.pages[pageId].extract;
        extract = extract.replace(/\s{2,}/g, ' ');
        return extract.split('.').slice(0, 2).join('.') + '.';
      })
      .catch((error) => {
        console.error(error);
        return 'Uh oh! Something went wrong.';
      });

  }
}
Scratch.extensions.register(new CAT());
