### Motivation

Consensus declares `520` as the maximum number of bytes pushable to the stack, but this alone does not define the multisig quorum constraints.
https://github.com/bitcoin/bitcoin/blob/ae024137bda9fe189f4e7ccf26dbaffd44cbbeb6/src/script/script.h#L28


Consider the following constant in standard node policy
https://github.com/bitcoin/bitcoin/blob/3eaa0a3b663782bb1bd874ea881b21649f1db767/src/policy/policy.h#L54-L56

```c
static constexpr unsigned int MAX_STANDARD_SCRIPTSIG_SIZE{1650};
```

For 2-of-3 the spending scripts are structured as follows, and placed in the scriptSig for P2SH and in the witness items for P2WSH.
```
OP_0
OP_PUSH72 <ecdsa_signature> OP_PUSH72 <ecdsa_signature>
OP_PUSHDATA1 105
<OP_2 OP_PUSH33 <pubkey> OP_PUSH33 <pubkey> OP_PUSH33 <pubkey> OP_3 OP_CHECKMULTISIG>
```

We can generalize this to M of N
```
OP_0
(OP_PUSH72 * <ecdsa_signature>)*M
OP_PUSHDATA2 <size>
OP_M (OP_PUSH33 <pubkey>)*N OP_N OP_CHECKMULTISIG
```

Let's assume for a moment that we let M=N, so we can solve for the maximum number of keys we can have in a multisig script. (Let's use M=N=K)

> NOTE: When N > 8 we have 1+(34*8) + 2 = 276 which is more than 256 bytes we can specify in OP_PUSHDATA1, so we need to use OP_PUSHDATA2.

| Operation | Byte Count |
| :------------------------------------------ | :---------- |
| `OP_0` | 1 |
| `OP_PUSH72 * <ecdsa_signature>)*K` | 73\*K |
| `OP_PUSHDATA2 <size>` | 3 |
| `OP_M (OP_PUSH33 <pubkey>)*N OP_N OP_CHECKMULTISIG` | 3 + 34\*K |

With a max of 1650 bytes for P2SH
```math
1 + 73 \cdot K + 3 + 3 + 34 \cdot K = 7 + 107 \cdot K 
```
```math
\implies K = floor\>\frac{1650-7}{107} = 15
```

∴ The theoretical maximum number of keys in a P2SH quorum with M=N is 15. Derived not from script element size, but from the maximum size of the scriptSig in policy.


Updated in Coldcard firmware:
[https://github.com/Coldcard/firmware/pull/535](https://github.com/Coldcard/firmware/pull/535)



