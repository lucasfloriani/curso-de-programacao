import glob from "glob";
import readline from "readline";
import { exec } from "child_process";

const fileType = process.env.FILE_TYPE;

const formatNumber = (aula: number): string => `${aula}`.padStart(3, "0");

const cliInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

cliInterface.question(
  `Qual o número do ${fileType} que deseja executar? `,
  (lessonNumber) => {
    const parsedNumber = Number(lessonNumber);
    if (isNaN(parsedNumber)) {
      console.log("Número da aula inexistente!");
      cliInterface.close();
      return;
    }

    const lessonNumberByString = formatNumber(parsedNumber);
    glob(`${lessonNumberByString}-**/${fileType}.ts`, (err, files) => {
      if (err || files.length !== 1) {
        console.log(`${fileType} desta aula não foi encontrado!`);
        cliInterface.close();
        return;
      }

      const [exemplo] = files;
      const path = `./${exemplo}`;

      const processRef = exec(`ts-node --transpileOnly ${path}`);
      processRef.stdout.pipe(process.stdout);
      processRef.stderr.pipe(process.stderr);
    });

    cliInterface.close();
  }
);
