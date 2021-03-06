const { expect } = require("chai");

  describe('Calculator', function() {
    it('Should return the right addition result', async function() {   
      const Calculator = await ethers.getContractFactory('Calculator');
      const calculator = await Calculator.deploy();
      expect(await calculator.add(2 ,3)).to.equal(5);
    });

    it('Should return the right substraction result', async function() {   
      const Calculator = await ethers.getContractFactory('Calculator');
      const calculator = await Calculator.deploy();
      expect(await calculator.sub(3 ,2)).to.equal(1);
    });

    it('Should return the right multiplication result', async function() {   
      const Calculator = await ethers.getContractFactory('Calculator');
      const calculator = await Calculator.deploy();
      expect(await calculator.mul(2 ,3)).to.equal(6);
    });

    it('Should return the right division result', async function() {   
      const Calculator = await ethers.getContractFactory('Calculator');
      const calculator = await Calculator.deploy();
      expect(await calculator.div(6 ,3)).to.equal(2);
    });

    it('Should return the right modulo result', async function() {   
      const Calculator = await ethers.getContractFactory('Calculator');
      const calculator = await Calculator.deploy();
      expect(await calculator.mod(10 ,2)).to.equal(0);
    });
    
  });
