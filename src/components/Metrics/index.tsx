import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from '@mui/material'
import * as zod from 'zod'

import { Data } from '@/interfaces/home'
import { schemaResearch } from '@/interfaces/schemas/research'

import { CardMetrics } from '../CardMetrics'
import { CardResearch } from '../CardResearch'

import { STYLES } from '@/constants/styles'
import { formatDate } from '@/utils/functions'

interface MetricsProps {
  data: Data
  gridArea: string
}

type ResearchFormData = zod.infer<typeof schemaResearch>

export function Metrics({ gridArea, data }: Readonly<MetricsProps>) {
  const [isOpen, setIsOpen] = useState(false)
  const [runningValue, runningGoal] = data.researches.running.split('/')

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ResearchFormData>({
    resolver: zodResolver(schemaResearch),
    defaultValues: { research: '' },
  })

  function onSubmit(form: ResearchFormData) {
    console.log(form)
    reset()
    setIsOpen(false)
  }

  return (
    <>
      <Box
        bgcolor="#000000"
        display="flex"
        p="14px"
        pb="60px"
        flexDirection="column"
        alignItems="center"
        gridArea={gridArea}
        sx={{
          [`${STYLES.breakpoints.md}`]: {
            flexDirection: 'row',
            p: '25px',
            pb: '38px',
          },
          [`${STYLES.breakpoints.xl}`]: {
            flexDirection: 'row',
            pr: '142px',
            pl: '163px',
          },
        }}
      >
        <Box color="#FFFFFF" maxWidth="731px" width="100%" mx="auto">
          <Typography variant="caption">RESUMO MENSAL</Typography>

          <Typography variant="h2" textTransform="uppercase">
            {formatDate(data.createAt)}
          </Typography>

          <Box
            mt="16px"
            gap="20px"
            width="100%"
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gridTemplateAreas={`"a b" "c c"`}
            sx={{
              [`${STYLES.breakpoints.md}`]: {
                display: 'flex',
              },
            }}
          >
            <CardMetrics
              hasStatus
              gridArea="a"
              type="points"
              value={Number(runningValue)}
              goal={Number(runningGoal)}
              title={
                <>
                  PESQUISAS <br /> EM CAMPO
                </>
              }
            />

            <CardMetrics
              gridArea="b"
              value={data.researches.scripting}
              goal={0}
              title={
                <>
                  PESQUISAS EM
                  <br />
                  ROTEIRIZAÇÃO
                </>
              }
            />

            <CardMetrics
              gridArea="c"
              type="progress"
              value={data.audience.sended}
              goal={data.audience.balance}
              title={
                <>
                  DISPAROS
                  <br />
                  FEITOS
                </>
              }
            />
          </Box>
        </Box>

        <CardResearch />
      </Box>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Fade in={isOpen}>
          <Box
            p="24px"
            bgcolor="#FFFFF"
            borderRadius="4px"
            zIndex={99}
            width="100%"
            maxWidth="450px"
          >
            <Typography
              fontWeight="bold"
              fontSize="1.5rem"
              textTransform="uppercase"
            >
              Nova Pesquisa
            </Typography>
            <Typography
              fontWeight="regular"
              fontSize="1rem"
              textAlign="center"
              mt="16px"
            >
              Crie uma nova pesquisa para <br /> conhecer seu cliente.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name={'research'}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <TextField
                      error={Boolean(errors.research?.message)}
                      helperText={errors.research?.message}
                      label="Digite sua pesquisa"
                      value={value}
                      onChange={onChange}
                      fullWidth
                      sx={{ marginTop: '24px' }}
                    />
                  )
                }}
              />
              <Box display="flex" gap="20px" mt="24px">
                <Button>Salvar Rascunho</Button>
                <Button>Criar Pesquisa</Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
