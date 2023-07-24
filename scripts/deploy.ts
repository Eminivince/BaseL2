import { ethers } from 'hardhat';

async function main() {
  const linearDex = await ethers.deployContract('LinearDex');

  await linearDex.waitForDeployment();

  console.log('LinearDex Contract Deployed at ' + linearDex.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});