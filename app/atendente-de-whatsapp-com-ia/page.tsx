import type { Metadata } from 'next'
import { PaginaServico } from '@/components/PaginaServico'
import { ATENDENTE, metadataDoServico } from '@/lib/servicos'

export const metadata: Metadata = metadataDoServico(ATENDENTE)

export default function Atendente() {
  return <PaginaServico pagina={ATENDENTE} />
}
