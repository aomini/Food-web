import Typography from '.'

export default {
  title: 'Typography/styles'
}

export const Header = () => (
  <>
    <Typography variant="h1" component="h1">
      Headers/h1
    </Typography>
    <Typography variant="h2" component="h2">
      Headers/h2
    </Typography>
    <Typography variant="h3" component="h3">
      Headers/h3
    </Typography>
    <Typography variant="h4" component="h4">
      Headers/h4
    </Typography>
    <Typography variant="h5" component="h5">
      Headers/h5
    </Typography>
  </>
)

export const TextBase = () => (
  <>
    <Typography variant="body" component="p">
      Headers/body
    </Typography>
    <Typography variant="caption" component="span">
      Headers/caption
    </Typography>
  </>
)
