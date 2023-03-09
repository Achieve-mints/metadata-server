# Metadata Server

This is a dynamic metadata generator for subtokens for achievemints.

## Getting Started



```bash
nvm use
yarn
yarn dev
```

Open [http://localhost:3000/api/:chainid/:tokenid](http://localhost:3000/api/:chainid/:tokenid) with your browser

## Adding/Editing SubTokens

Once a subtoken is deployed:

Edit `src/pages/api/[chainid]/[tokenid].ts` to add relevant logic for subtokens by
referring to them using the `decoders` list. More documentation available inline.

Add/update images in the `public` directory and refer to them using the above 
metadata methods.
