# Install

```
npm install
```

# run

```
node index.js
```

# use

```
curl -o- http://localhost:3000/auth // return success
curl -o- http://localhost:3000/auth?on=0 // return fail
curl -o- http://localhost:3000/auth?on=1 // return success
```