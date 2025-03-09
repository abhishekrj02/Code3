Steps to start the deployment server:

- Ensure Localnet is Running

```
aptos node run-local-testnet
```

- Delete the build file

```
rm build
```

- Re-compile the build file

```
aptos move compile --package-dir uploads
```

it should show something like :

```
{
      "Result": [ "388702298ed7f5a7a34a8928aadd83494bd3b8e6f88f6d27f16feadc654fe6e7::message"]
}
```

- Publish the module :

```
aptos move publish --package-dir uploads --profile localnet
```

it should show something like :

```
{
"Result": {
      "transaction_hash": "0xfb5fa3605ef6a9872fe0ddd7e0b57a6e524f9edd44d7c8ac5b5ce32dfbfc55f3",
      "gas_used": 78,
      "gas_unit_price": 100,
      "sender": "388702298ed7f5a7a34a8928aadd83494bd3b8e6f88f6d27f16feadc654fe6e7",
      "sequence_number": 7,
      "success": true,
      "timestamp_us": 1741470364198217,
      "version": 8020,
      "vm_status": "Executed successfully"
            }
}
```

- Navigate to the the backend server :

```
cd backend
```

- Start the backend server :
```
node server.js
```

Now you are good to go start sending the HTTPS request using postman at (post request):
```
http://localhost:3000/compile
```

and the request body should be in the format of :
```
{
      "code": "module hello::test { use std::assert;   public fun main() {  assert!(2 + 2 == 4, 1); }}"
}
```


