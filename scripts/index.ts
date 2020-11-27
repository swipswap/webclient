import { randomBytes } from 'crypto'
import b58 from "bs58check"
import * as bjs from "bitcoinjs-lib"

export const generateRandom = () => randomBytes(11).toString('hex')


const pubToXpub = (ypub) => {
  let data = b58.decode(ypub);
  data = data.slice(4);
  data = Buffer.concat([Buffer.from("0488b21e", "hex"), data]);
  return b58.encode(data);
};

const decodepub = (ypub) => {
  let data = b58.decode(ypub);
  return data.slice(4);
};

export const bitcoin = (pubkey, index) => {
  const now = index;
  try {
    const xpubkey = pubkey.startsWith("xpub") ? pubkey : pubToXpub(pubkey);

    const node = bjs.bip32.fromBase58(xpubkey, bjs.networks.bitcoin);

    const zaddress = bjs.payments.p2wpkh({
      pubkey: node.derive(0).derive(now).publicKey,
    });

    const xaddress = bjs.payments.p2pkh({
      pubkey: node.derive(0).derive(now).publicKey,
      network: bjs.networks.bitcoin,
    });

    const yaddress = bjs.payments.p2sh({
      redeem: zaddress,
    });

    const pubs = {
      xpub: xaddress.address,
      ypub: yaddress.address,
      zpub: zaddress.address,
    };

    const prefix = pubkey.slice(0, 4);
    const address = pubs[prefix];
    console.log({ address });
    return address;
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const tbitcoin = (pubkey, previous) => {
  if(!pubkey){return ""}
  try {
    const now = previous;
    const tpubkey = b58.encode(
      Buffer.concat([Buffer.from("043587cf", "hex"), decodepub(pubkey)])
    );

    const node = bjs.bip32.fromBase58(tpubkey, bjs.networks.testnet);

    const vaddress = bjs.payments.p2wpkh({
      pubkey: node.derive(0).derive(now).publicKey,
      network: bjs.networks.testnet,
    });
    const address = vaddress.address;
    console.log({ address });
    return address;
  } catch (error) {
    console.log(error);
    return "";
  }
};
