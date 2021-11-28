import { useCallback } from 'react'
import { useRouter } from 'next/router'

import { Box, Typography, Card, CardContent, CardMedia, Grid, Button } from '@mui/material'
import { AddCircle } from '@mui/icons-material'

import { SubHeader } from '@/components/molecules/SubHeader'
import { HeaderDrawer } from '@/components/templates/HeaderDrawer'

import type { ReactElement } from 'react'
import type { SubHeaderProps } from '@/types/ui'

const Cars = () => {
  const router = useRouter()

  const subHeaderProps: SubHeaderProps = {
    breadcrumbs: [
      {
        text: '車管理'
      }
    ],
    button: {
      text: '新車種追加',
      icon: <AddCircle />,
      handleClick: useCallback(() => router.push('/cars/create'), [router])
    }
  }

  return (
    <Box>
      <SubHeader {...subHeaderProps} sx={{ mb: 2 }} />

      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <Card square sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  トヨタ セレナ
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  オプションテキスト
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="text" color="success">編集</Button>
                <Button variant="text" color="error">削除</Button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://mui.com/static/images/cards/live-from-space.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <Card square sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  トヨタ セレナ
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  オプションテキスト
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="text" color="success">編集</Button>
                <Button variant="text" color="error">削除</Button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://mui.com/static/images/cards/live-from-space.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <Card square sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  トヨタ セレナ
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  オプションテキスト
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="text" color="success">編集</Button>
                <Button variant="text" color="error">削除</Button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://mui.com/static/images/cards/live-from-space.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <Card square sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  トヨタ セレナ
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  オプションテキスト
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="text" color="success">編集</Button>
                <Button variant="text" color="error">削除</Button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://mui.com/static/images/cards/live-from-space.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <Card square sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  トヨタ セレナ
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  オプションテキスト
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="text" color="success">編集</Button>
                <Button variant="text" color="error">削除</Button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://mui.com/static/images/cards/live-from-space.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

Cars.getLayout = (page: ReactElement) => <HeaderDrawer>{page}</HeaderDrawer>

export default Cars
