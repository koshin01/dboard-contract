const main = async () => {
    const messageContractFactory = await hre.ethers.getContractFactory("MessagePortal");
    const messageContract = await messageContractFactory.deploy();
    await messageContract.deployed();

    console.log("Contract address:",messageContract.address);
}

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }catch (error){
        console.log(error);
        process.exit(1);
    }
}

runMain();