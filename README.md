# Site de monitoramento de rotina de exercícios físicos focados em calistenia (similar ao Hevy)

# Principais propriedades:
-O site é dividido em:  
	-Página Login  
    -Página Home (Resumo Geral)  
	-Página de Treinos  
	-Página de Explicação de Treino  
    -Página de Evolução (Gráficos)  
    -Página de Histórico de exercícios feitos
	
-Na sessão de login, o usuário faz uma conta que mantém guardada as seguintes informações:
        -E-mail
        -Senha
Após o usuário ser identificado e visto como inscrito, a aba introdutória não aparecerá mais.

-A aba home deve conter um resumo do progresso geral do usuário, mostrando, por meio de gráficos temporais:
    -Quantia de treinos feitos no geral
    -Evolução no número de carga/repetições/peso 
    -Quais os treinos reservados para o dia de vizualização 

-A aba de rotina deve conter 7 (uma por dia da semana) rotinas de treino customizáveis. Cada treino, a depender de sua propriedade,
possui as seguintes caracteristicas:
    -Séries; e dentro de cada séria deve haver:  
    -Repetições (É decidida pelo usuário à cada série. Máx. de 100 repetições)  
    -Carga (É decidida pelo usuário à cada série. Máx. de 1000.0kg)  
    -Tempo (É decidida pelo usuário à cada série. Máx. de 5.5 horas)  

Cada série deve conter uma checkbox para marcar sua conclusão; após a conclusão de todas as séries disponiveis no treino, o treino é dado como completo e o progresso é salvo.
