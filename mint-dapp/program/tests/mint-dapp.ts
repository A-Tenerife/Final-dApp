import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { MintDapp } from "../target/types/mint_dapp";

describe("mint-dapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MintDapp as Program<MintDapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
