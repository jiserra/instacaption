# Markov Chain Instagram Caption Generator

## To run the server:
1. `node index.js`
2. Go to http://localhost:3000/{desired-seed}

The server returns a JSON response with the key `message` and the value of the generated caption.

## To scrape:

1. Install **Instagram-Scraper** from https://github.com/rarcega/instagram-scraper
(you can also do `pip install instagram-scraper`)
2. Run the command:
```
instagram-scraper [ig-user-to-scrape] -u [Your-ig-USER] -p [Your-ig-PASSWORD] -t none --media-metadata
```

## To convert the scrape info to a JSON

### New method:
`node generate-seed.js [instagram-username]`

### Old method:
1. Go to https://jsonpath.com/
2. Paste the generated JSON from the scraper on the left textarea
3. Use this path: `$.GraphImages[*].edge_media_to_caption.edges[:1].node.text`
4. Copy the resulting JSON inside the `seeds` folder
5. Remove the generated username folder