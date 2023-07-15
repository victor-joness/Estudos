package UltronPackage;
import static robocode.util.Utils.normalRelativeAngleDegrees;
import java.awt.*;
import robocode.*;

// API help : https://robocode.sourceforge.io/docs/robocode/robocode/Robot.html

/**
 * Ultron - a robot by (your name here)
 * bom eu tava fazendo primeiro o robo normal, andando pra cima e pra baixo, porem ele não conseguia mirar com precisão, as balas a maioria das vezes não acertava
 * então eu decidir deixar ele parado, (oque é a principal desvantagem), porem decidir focar na força do tiro, que é sempre baseada no angulo do canhao, quando o angulo
 * quando o valor do angulo é mt baixo, é porque o robo inimigo está muito perto, logo o tiro é forte, se o angulo é grande, é porque ele ta longe, então o tiro é 
 * mais fraco.
 * 
 * Ponto forte : robos inimigos perto.
 * Ponto fraco : robos rapidos, que se movem bastante.
 */

public class Ultron extends AdvancedRobot {
	public void run() {
		// escolhendo as cores
		setBodyColor(Color.red);
		setGunColor(Color.red);
		setRadarColor(Color.red);
		setScanColor(Color.red);
		setBulletColor(Color.red);

		// enquanto estiver vivo
		while (true) {
		    // Scaneamento do inimigo, e fica virando a arma de 10 em 10 pra direita até
			// achar inimigo 
			scan();
			turnGunRight(10);
		}
	}
	/**
	 * onScannedRobot: quando um inimigo é scaneado
	 */
	public void onScannedRobot(ScannedRobotEvent e) {

		// Calculando a posição do inimigo
		// getHeading() retorna a direção que meu robo está virado
		// e.getBearing() retorna a direção que o robo inimigo está virado
		double AnguloInimigo = getHeading() + e.getBearing();
		// movendo o canhão para o inimigo 
		// normalRelativeAngleDegrees faz a conversao do angulo para pixel, e eu passo pro
		// angulo do canhao, toda vez q tiver "1" turno, ele atualiza e o canhao mira mais preciso
		double AnguloCanhao = normalRelativeAngleDegrees(AnguloInimigo - getGunHeading());

		// se o angulo do canhao for <= 3 é pq o inimigo ta colado na gente, então atira 
		// com força maxima, Math.abs == valor absoluto do angulo canhao, pq o angulo pode ficar negativo
		if (Math.abs(AnguloCanhao) <= 3) {
			turnGunRight(AnguloCanhao);
			// fazemos a verificação se o canhao ta quente, se tiver frio ele atira,
			// Math.min retorna o menor valor, dos valores passados como parametro para economizar energia
			// se o canhao ta perto, o valor absoluto vai ser pequeno, logo o tiro vai ser forte
			if (getGunHeat() == 0) {
				System.out.printf("potencia do tiro : %f",Math.min(3 - Math.abs(AnguloCanhao), getEnergy() - .1));
				fire(Math.min(3 - Math.abs(AnguloCanhao), getEnergy() - .1));
			}
		} // caso contrario é pq o inimigo ta longe, então a gente atualiza a posição da arma
		// para o inimigo
		else {
			turnGunRight(AnguloCanhao);
		}
		// com o canhao na direção do inimigo, ele cai no if de cima, então só
		// precisamos fazer uma nova varredura pra ver se o inimigo ta na mira
		if (AnguloCanhao == 0) {
			scan();
		}
	}
}	