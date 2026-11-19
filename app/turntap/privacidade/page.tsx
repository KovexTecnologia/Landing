import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { CabecalhoSimples } from '@/components/CabecalhoSimples'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { Rodape } from '@/components/Rodape'
import { COMPANY_ADDRESS, COMPANY_CNPJ, COMPANY_NAME, CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade do TurnTap · Kovex Tecnologia',
  description:
    'O que o app TurnTap faz com a navegação do Google Maps que ele leva ao relógio: tudo fica no seu celular.',
  alternates: { canonical: '/turntap/privacidade' },
}

const ATUALIZADA_EM = '19 de novembro de 2026'

/**
 * Política do app TurnTap (Android, br.com.kovex.turntap), exigida pelo Google
 * Play. Mesma estrutura da /privacidade do site. Os fatos vêm do código do app
 * (repositório watch-navigation): ele só lê a notificação do pacote
 * com.google.android.apps.maps, só escuta em 127.0.0.1, não faz nenhuma
 * requisição para a internet e não grava a rota em disco.
 */
function Clausula({ numero, titulo, children }: { numero: string; titulo: string; children: ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-fio pt-8 sm:grid-cols-[4rem_1fr]">
      <p className="rotulo pt-2 text-azul-claro">{numero}</p>
      <div>
        <h2 className="font-display text-subtitulo font-bold">{titulo}</h2>
        <div className="mt-4 grid gap-4 text-apoio">{children}</div>
      </div>
    </section>
  )
}

const Email = () => (
  <a href={`mailto:${CONTACT_EMAIL}`} className="link">
    {CONTACT_EMAIL}
  </a>
)

export default function PrivacidadeTurnTap() {
  const a = COMPANY_ADDRESS

  return (
    <>
      <CabecalhoSimples />

      <main id="conteudo" className="py-secao">
        <article className="moldura">
          <h1 className="font-display text-titulo font-bold">Política de Privacidade do TurnTap</h1>
          <p className="mt-8 max-w-texto text-abertura text-apoio">
            O TurnTap mostra no seu relógio a navegação que o Google Maps já está fazendo no seu celular. Ele não
            tem conta, não tem anúncios e não manda nada para a Kovex nem para a internet. Abaixo, em detalhe, o que
            ele lê e para onde isso vai. Atualizada em {ATUALIZADA_EM}.
          </p>

          <div className="mt-16 grid max-w-192 gap-12">
            <Clausula numero="01" titulo="Quem é responsável">
              <p>
                O TurnTap é desenvolvido pela {COMPANY_NAME}, CNPJ {COMPANY_CNPJ}, com sede na {a.street},{' '}
                {a.complement}, {a.district}, {a.city}/{a.state}, CEP {a.postalCode}.
              </p>
              <p>
                Para qualquer assunto de privacidade, escreva para <Email />.
              </p>
            </Clausula>

            <Clausula numero="02" titulo="O que esta política cobre">
              <p>
                Ela vale para o app TurnTap para Android e para o app TurnTap do relógio, instalado pelo app Zepp. O
                TurnTap não é um produto do Google nem da Zepp Health. O Google Maps e o app Zepp têm as próprias
                políticas de privacidade.
              </p>
            </Clausula>

            <Clausula numero="03" titulo="O que o app lê">
              <p>
                Com a sua permissão de acesso às notificações, o TurnTap lê somente a notificação de navegação do
                Google Maps: a instrução da próxima manobra, o nome da rua, a distância, o horário de chegada, o
                progresso da rota e o desenho da seta. As notificações de todos os outros apps são ignoradas: o
                TurnTap não lê o conteúdo delas e não guarda nada delas.
              </p>
              <p>
                O TurnTap não usa o GPS do celular, não pede a sua localização e não acessa contatos, fotos, mensagens
                ou arquivos.
              </p>
            </Clausula>

            <Clausula numero="04" titulo="Para onde esses dados vão">
              <p>
                Para o seu relógio, e para nenhum outro lugar. O app do celular deixa a navegação atual disponível
                num endereço interno do próprio aparelho (127.0.0.1), que não pode ser acessado de fora do celular. O
                app Zepp, instalado no mesmo celular, busca os dados nesse endereço e os envia ao relógio por
                Bluetooth, pela conexão que ele já mantém com o relógio.
              </p>
              <p>
                O TurnTap não envia dados para servidores da Kovex nem de terceiros, e não usa serviços de análise,
                de publicidade ou de relatório de erros.
              </p>
              <p>
                Um ponto técnico, para você decidir com todas as informações: esse endereço interno pode ser lido por
                outros apps instalados no mesmo celular. Por isso o TurnTap expõe nele somente a navegação atual, sem
                o conteúdo de nenhuma outra notificação.
              </p>
            </Clausula>

            <Clausula numero="05" titulo="Por quanto tempo guardamos">
              <p>
                O TurnTap não grava a rota. A navegação atual fica só na memória do app enquanto a rota está ativa e
                é descartada quando ela muda ou quando o app é encerrado. O relógio guarda o último desenho de seta
                recebido, para não ter de recebê-lo de novo, até o app do relógio ser fechado.
              </p>
            </Clausula>

            <Clausula numero="06" titulo="Permissões que o app pede">
              <p>
                <strong>Acesso às notificações</strong>, para ler a notificação de navegação do Google Maps.{' '}
                <strong>Serviço em segundo plano</strong> e <strong>uso de bateria sem restrições</strong>, para que
                o sistema não pause o app enquanto o Google Maps está na tela e você está dirigindo.{' '}
                <strong>Notificações</strong>, para mostrar o aviso de que o TurnTap está ativo. Você pode revogar
                qualquer uma delas nos ajustes do Android, e o app para de funcionar sem a primeira.
              </p>
            </Clausula>

            <Clausula numero="07" titulo="Crianças">
              <p>O TurnTap é destinado a adultos e não é direcionado a crianças.</p>
            </Clausula>

            <Clausula numero="08" titulo="Seus direitos">
              <p>
                Como o TurnTap não envia dados pessoais para a Kovex, não temos dados seus para mostrar, corrigir ou
                apagar. Para apagar tudo o que o app tem no seu celular, basta desinstalá-lo. Os direitos do art. 18
                da Lei nº 13.709/2018 (LGPD) continuam valendo, e você pode exercê-los ou tirar dúvidas escrevendo
                para <Email />. Você também pode recorrer à Autoridade Nacional de Proteção de Dados (ANPD).
              </p>
            </Clausula>

            <Clausula numero="09" titulo="Mudanças nesta política">
              <p>
                Se uma versão futura do TurnTap passar a enviar dados para fora do celular, esta política será
                atualizada antes dessa versão ser publicada. A data no topo da página indica a versão em vigor.
              </p>
            </Clausula>
          </div>
        </article>
      </main>

      <Rodape base="/" />
      <BreadcrumbJsonLd
        trilha={[
          { nome: 'Início', caminho: '/' },
          { nome: 'Política de Privacidade do TurnTap', caminho: '/turntap/privacidade' },
        ]}
      />
    </>
  )
}
