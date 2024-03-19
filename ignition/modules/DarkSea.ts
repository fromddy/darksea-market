import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DarkSeaModule = buildModule("DarkSeaModule", (m) => {
  const offer = m.library("DarkSeaMarketOffer");
  const list = m.library("DarkSeaMarketList");

  const darksea = m.contract("DarkSeaMarket", [], {
    libraries: {
      DarkSeaMarketOffer: offer,
      DarkSeaMarketList: list,
    },
  });
  return { darksea };
});

export default DarkSeaModule;
