/**
 *              ,
 *             / \,,_  .'|
 *          ,{{| /}}}}/_.'            _____________________________________________
 *         }}}}` '{{'  '.            /                                             \
 *       {{{{{    _   ;, \          /            Ladies and Gentlemen,              \
 *    ,}}}}}}    /o`\  ` ;)        |                                                |
 *   {{{{{{   /           (        |                 this is ...                    |
 *   }}}}}}   |            \       |                                                |
 *  {{{{{{{{   \            \      |      _____     __  .-_'''-.   .---.  .---.     |
 *  }}}}}}}}}   '.__      _  |     |      \   _\   /  /'_( )_   \  |   |  |_ _|     |
 *  {{{{{{{{       /`._  (_\ /     |      .-./ ). /  '|(_ o _)|  ' |   |  ( ' )     |
 *   }}}}}}'      |    //___/   --=:      \ '_ .') .' . (_,_)/___| |   '-(_{;}_)    |
 *   `{{{{`       |     '--'       |     (_ (_) _) '  |  |  .-----.|      (_,_)     |
 *    }}}`                         |       /    \   \ '  \  '-   .'| _ _--.   |     |
 *                                 |       `-'`-'    \ \  `-'`   | |( ' ) |   |     |
 *                                 |      /  /   \    \ \        / (_{;}_)|   |     |
 *                                 |     '--'     '----' `'-...-'  '(_,_) '---'     |
 *                                 |                                               /
 *                                  \_____________________________________________/
 */

package main

import (
    "fmt"
    "log"
    "os"
    "gopkg.in/urfave/cli.v1"
)

func main() {
  app := cli.NewApp()

  app.Name = "UFABCLI"
  app.Usage = "13"

  app.Action = func(c *cli.Context) error {
    fmt.Println("asdajkdajd")
    return nil
  }

  err := app.Run(os.Args)
  if err != nil {
    log.Fatal(err)
  }
}
